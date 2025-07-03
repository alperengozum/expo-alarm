package expo.modules.alarm

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import android.content.Context
import android.content.Intent
import android.os.Bundle
import androidx.core.os.bundleOf
import expo.modules.kotlin.Promise
import expo.modules.kotlin.exception.Exceptions
import android.provider.AlarmClock
import java.util.Calendar

private const val REQUEST_CODE = 12
private const val ATTR_EXTRA = "extra"
private const val ATTR_DATA = "data"

class ExpoAlarmModule : Module() {
  private val context: Context
    get() = appContext.reactContext ?: throw Exceptions.ReactContextLost()
  private val currentActivity
    get() = appContext.currentActivity ?: throw Exceptions.MissingActivity()
  private var pendingPromise: Promise? = null

  override fun definition() = ModuleDefinition {
    Name("ExpoAlarm")

    AsyncFunction("dismissAlarm") { params: DismissAlarmParams, promise: Promise ->
      val intent = Intent(AlarmClock.ACTION_DISMISS_ALARM)
      params.searchMode?.let { intent.putExtra(AlarmClock.EXTRA_ALARM_SEARCH_MODE, it) }
      pendingPromise = promise
      currentActivity.startActivityForResult(intent, REQUEST_CODE)
    }
    AsyncFunction("dismissTimer") { params: DismissTimerParams, promise: Promise ->
      val intent = Intent(AlarmClock.ACTION_DISMISS_TIMER)
      pendingPromise = promise
      currentActivity.startActivityForResult(intent, REQUEST_CODE)
    }
    AsyncFunction("setAlarm") { params: SetAlarmParams, promise: Promise ->
      val intent = Intent(AlarmClock.ACTION_SET_ALARM)
      params.hour?.let { intent.putExtra(AlarmClock.EXTRA_HOUR, it.toInt()) }
      params.minutes?.let { intent.putExtra(AlarmClock.EXTRA_MINUTES, it.toInt()) }
      params.days?.let { intent.putExtra(AlarmClock.EXTRA_DAYS, it) }
      params.message?.let { intent.putExtra(AlarmClock.EXTRA_MESSAGE, it) }
      params.ringtoneUri?.let { intent.putExtra(AlarmClock.EXTRA_RINGTONE, it) }
      params.vibrate?.let { intent.putExtra(AlarmClock.EXTRA_VIBRATE, it) }
      params.skipUi?.let { intent.putExtra(AlarmClock.EXTRA_SKIP_UI, it) }
      params.extra?.let { intent.putExtras(it.toBundle()) }
      pendingPromise = promise
      currentActivity.startActivityForResult(intent, REQUEST_CODE)
    }
    AsyncFunction("setTimer") { params: SetTimerParams, promise: Promise ->
      val intent = Intent(AlarmClock.ACTION_SET_TIMER)
      params.seconds?.let { intent.putExtra(AlarmClock.EXTRA_LENGTH, it.toInt()) }
      params.message?.let { intent.putExtra(AlarmClock.EXTRA_MESSAGE, it) }
      params.skipUi?.let { intent.putExtra(AlarmClock.EXTRA_SKIP_UI, it) }
      params.extra?.let { intent.putExtras(it.toBundle()) }
      pendingPromise = promise
      currentActivity.startActivityForResult(intent, REQUEST_CODE)
    }
    AsyncFunction("showAlarms") { params: ShowAlarmsParams, promise: Promise ->
      val intent = Intent(AlarmClock.ACTION_SHOW_ALARMS)
      params.extra?.let { intent.putExtras(it.toBundle()) }
      pendingPromise = promise
      currentActivity.startActivityForResult(intent, REQUEST_CODE)
    }
    AsyncFunction("showTimers") { params: ShowTimersParams, promise: Promise ->
      val intent = Intent(AlarmClock.ACTION_SHOW_TIMERS)
      params.extra?.let { intent.putExtras(it.toBundle()) }
      pendingPromise = promise
      currentActivity.startActivityForResult(intent, REQUEST_CODE)
    }
    AsyncFunction("snoozeAlarm") { params: SnoozeAlarmParams, promise: Promise ->
      val intent = Intent(AlarmClock.ACTION_SNOOZE_ALARM)
      params.snoozeDuration?.let { intent.putExtra(AlarmClock.EXTRA_ALARM_SNOOZE_DURATION, it.toInt()) }
      pendingPromise = promise
      currentActivity.startActivityForResult(intent, REQUEST_CODE)
    }

    OnActivityResult { _, payload ->
      if (payload.requestCode != REQUEST_CODE) {
        return@OnActivityResult
      }

      val response = Bundle().apply {
        putInt("resultCode", payload.resultCode)
        if (payload.data != null) {
          payload.data?.let { putString(ATTR_DATA, it.toString()) }
          payload.data?.extras?.let { putBundle(ATTR_EXTRA, it) }
        }
      }

      pendingPromise?.resolve(response)
      pendingPromise = null
    }
  }
}

private fun Map<String, Any>.toBundle(): Bundle = bundleOf(*this.toList().toTypedArray())
