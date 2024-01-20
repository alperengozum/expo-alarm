package expo.modules.alarm.exceptions

import expo.modules.core.errors.CodedException

class ActivityAlreadyStartedException :
  CodedException("Alarm activity is already started. You need to wait for its result before starting another activity.") {
  override fun getCode(): String {
    return "E_ACTIVITY_ALREADY_STARTED"
  }
}
