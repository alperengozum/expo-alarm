export var ResultCode;
(function (ResultCode) {
    /**
     * Indicates that the activity operation succeeded.
     */
    ResultCode[ResultCode["Success"] = -1] = "Success";
    /**
     * Means that the activity was canceled, e.g. by tapping on the back button.
     */
    ResultCode[ResultCode["Canceled"] = 0] = "Canceled";
    /**
     * First custom, user-defined value that can be returned by the activity.
     */
    ResultCode[ResultCode["FirstUser"] = 1] = "FirstUser";
})(ResultCode || (ResultCode = {}));
//# sourceMappingURL=ExpoAlarm.types.js.map