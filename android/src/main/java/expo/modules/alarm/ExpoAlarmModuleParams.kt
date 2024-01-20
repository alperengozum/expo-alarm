package expo.modules.alarm

import expo.modules.kotlin.records.Field
import expo.modules.kotlin.records.Record

interface Extra {
  val extra: Map<String, Any>?
}

data class DismissAlarmParams(
  @Field
  val searchMode: String?,
  @Field
  override val extra: Map<String, Any>?
) : Record, Extra

data class DismissTimerParams(
  @Field
  override val extra: Map<String, Any>?
  ) : Record, Extra

data class SetAlarmParams(
  @Field
  val hour: Int?,

  @Field
  val minutes: Int?,

  @Field
  val days: Array<Int>?,

  @Field
  val message: String?,

  @Field
  val ringtoneUri: String?,

  @Field
  val vibrate: Boolean?,

  @Field
  val skipUi: Boolean?,

  @Field
  override val extra: Map<String, Any>?
) : Record, Extra

data class SetTimerParams(
  @Field
  val seconds: Int?,

  @Field
  val message: String?,

  @Field
  val skipUi: Boolean?,

  @Field
  override val extra: Map<String, Any>?
) : Record, Extra

data class ShowAlarmsParams(
  @Field
  override val extra: Map<String, Any>?
  ) : Record, Extra

data class ShowTimersParams(
  @Field
  override val extra: Map<String, Any>?
  ) : Record, Extra

data class SnoozeAlarmParams(
  @Field
  val snoozeDuration: Int?,

  @Field
  override val extra: Map<String, Any>?
) : Record, Extra
