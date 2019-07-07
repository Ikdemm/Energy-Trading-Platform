/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function ItemsRangeResult() { }
/** @type {?} */
ItemsRangeResult.prototype.scrollHeight;
/** @type {?} */
ItemsRangeResult.prototype.topPadding;
/** @type {?} */
ItemsRangeResult.prototype.start;
/** @type {?} */
ItemsRangeResult.prototype.end;
/**
 * @record
 */
export function PanelDimensions() { }
/** @type {?} */
PanelDimensions.prototype.itemHeight;
/** @type {?} */
PanelDimensions.prototype.panelHeight;
/** @type {?} */
PanelDimensions.prototype.itemsPerViewport;
var NgDropdownPanelService = /** @class */ (function () {
    function NgDropdownPanelService() {
        this._dimensions = {
            itemHeight: 0,
            panelHeight: 0,
            itemsPerViewport: 0
        };
    }
    Object.defineProperty(NgDropdownPanelService.prototype, "dimensions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dimensions;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} scrollPos
     * @param {?} itemsLength
     * @param {?} buffer
     * @return {?}
     */
    NgDropdownPanelService.prototype.calculateItems = /**
     * @param {?} scrollPos
     * @param {?} itemsLength
     * @param {?} buffer
     * @return {?}
     */
    function (scrollPos, itemsLength, buffer) {
        /** @type {?} */
        var d = this._dimensions;
        /** @type {?} */
        var scrollHeight = d.itemHeight * itemsLength;
        /** @type {?} */
        var scrollTop = Math.max(0, scrollPos);
        /** @type {?} */
        var indexByScrollTop = scrollTop / scrollHeight * itemsLength;
        /** @type {?} */
        var end = Math.min(itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerViewport + 1));
        /** @type {?} */
        var maxStartEnd = end;
        /** @type {?} */
        var maxStart = Math.max(0, maxStartEnd - d.itemsPerViewport);
        /** @type {?} */
        var start = Math.min(maxStart, Math.floor(indexByScrollTop));
        /** @type {?} */
        var topPadding = d.itemHeight * Math.ceil(start) - (d.itemHeight * Math.min(start, buffer));
        topPadding = !isNaN(topPadding) ? topPadding : 0;
        start = !isNaN(start) ? start : -1;
        end = !isNaN(end) ? end : -1;
        start -= buffer;
        start = Math.max(0, start);
        end += buffer;
        end = Math.min(itemsLength, end);
        return {
            topPadding: topPadding,
            scrollHeight: scrollHeight,
            start: start,
            end: end
        };
    };
    /**
     * @param {?} itemHeight
     * @param {?} panelHeight
     * @return {?}
     */
    NgDropdownPanelService.prototype.setDimensions = /**
     * @param {?} itemHeight
     * @param {?} panelHeight
     * @return {?}
     */
    function (itemHeight, panelHeight) {
        /** @type {?} */
        var itemsPerViewport = Math.max(1, Math.floor(panelHeight / itemHeight));
        this._dimensions = {
            itemHeight: itemHeight,
            panelHeight: panelHeight,
            itemsPerViewport: itemsPerViewport
        };
    };
    /**
     * @param {?} itemTop
     * @param {?} itemHeight
     * @param {?} lastScroll
     * @return {?}
     */
    NgDropdownPanelService.prototype.getScrollTo = /**
     * @param {?} itemTop
     * @param {?} itemHeight
     * @param {?} lastScroll
     * @return {?}
     */
    function (itemTop, itemHeight, lastScroll) {
        /** @type {?} */
        var itemBottom = itemTop + itemHeight;
        /** @type {?} */
        var top = lastScroll;
        /** @type {?} */
        var bottom = top + this.dimensions.panelHeight;
        if (itemBottom > bottom) {
            return top + itemBottom - bottom;
        }
        else if (itemTop <= top) {
            return itemTop;
        }
        return null;
    };
    return NgDropdownPanelService;
}());
export { NgDropdownPanelService };
if (false) {
    /** @type {?} */
    NgDropdownPanelService.prototype._dimensions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZHJvcGRvd24tcGFuZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0LyIsInNvdXJjZXMiOlsibmctc2VsZWN0L25nLWRyb3Bkb3duLXBhbmVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQSxJQUFBOzsyQkFFMkM7WUFDbkMsVUFBVSxFQUFFLENBQUM7WUFDYixXQUFXLEVBQUUsQ0FBQztZQUNkLGdCQUFnQixFQUFFLENBQUM7U0FDdEI7O0lBRUQsc0JBQUksOENBQVU7Ozs7UUFBZDtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUMzQjs7O09BQUE7Ozs7Ozs7SUFFRCwrQ0FBYzs7Ozs7O0lBQWQsVUFBZSxTQUFpQixFQUFFLFdBQW1CLEVBQUUsTUFBYzs7UUFDakUsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzs7UUFDM0IsSUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7O1FBRWhELElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDOztRQUN6QyxJQUFNLGdCQUFnQixHQUFHLFNBQVMsR0FBRyxZQUFZLEdBQUcsV0FBVyxDQUFDOztRQUNoRSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFFeEYsSUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDOztRQUN4QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxXQUFXLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7O1FBQy9ELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDOztRQUU3RCxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDNUYsVUFBVSxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLEtBQUssSUFBSSxNQUFNLENBQUM7UUFDaEIsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNCLEdBQUcsSUFBSSxNQUFNLENBQUM7UUFDZCxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFakMsT0FBTztZQUNILFVBQVUsWUFBQTtZQUNWLFlBQVksY0FBQTtZQUNaLEtBQUssT0FBQTtZQUNMLEdBQUcsS0FBQTtTQUNOLENBQUE7S0FDSjs7Ozs7O0lBRUQsOENBQWE7Ozs7O0lBQWIsVUFBYyxVQUFrQixFQUFFLFdBQW1COztRQUNqRCxJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNmLFVBQVUsWUFBQTtZQUNWLFdBQVcsYUFBQTtZQUNYLGdCQUFnQixrQkFBQTtTQUNuQixDQUFDO0tBQ0w7Ozs7Ozs7SUFFRCw0Q0FBVzs7Ozs7O0lBQVgsVUFBWSxPQUFlLEVBQUUsVUFBa0IsRUFBRSxVQUFrQjs7UUFDL0QsSUFBTSxVQUFVLEdBQUcsT0FBTyxHQUFHLFVBQVUsQ0FBQzs7UUFDeEMsSUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDOztRQUN2QixJQUFNLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFFakQsSUFBSSxVQUFVLEdBQUcsTUFBTSxFQUFFO1lBQ3JCLE9BQU8sR0FBRyxHQUFHLFVBQVUsR0FBRyxNQUFNLENBQUM7U0FDcEM7YUFBTSxJQUFJLE9BQU8sSUFBSSxHQUFHLEVBQUU7WUFDdkIsT0FBTyxPQUFPLENBQUM7U0FDbEI7UUFFRCxPQUFPLElBQUksQ0FBQztLQUNmO2lDQTNFTDtJQTRFQyxDQUFBO0FBL0RELGtDQStEQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSXRlbXNSYW5nZVJlc3VsdCB7XG4gICAgc2Nyb2xsSGVpZ2h0OiBudW1iZXI7XG4gICAgdG9wUGFkZGluZzogbnVtYmVyO1xuICAgIHN0YXJ0OiBudW1iZXI7XG4gICAgZW5kOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFuZWxEaW1lbnNpb25zIHtcbiAgICBpdGVtSGVpZ2h0OiBudW1iZXI7XG4gICAgcGFuZWxIZWlnaHQ6IG51bWJlcjtcbiAgICBpdGVtc1BlclZpZXdwb3J0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBOZ0Ryb3Bkb3duUGFuZWxTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgX2RpbWVuc2lvbnM6IFBhbmVsRGltZW5zaW9ucyA9IHtcbiAgICAgICAgaXRlbUhlaWdodDogMCxcbiAgICAgICAgcGFuZWxIZWlnaHQ6IDAsXG4gICAgICAgIGl0ZW1zUGVyVmlld3BvcnQ6IDBcbiAgICB9O1xuXG4gICAgZ2V0IGRpbWVuc2lvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaW1lbnNpb25zO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZUl0ZW1zKHNjcm9sbFBvczogbnVtYmVyLCBpdGVtc0xlbmd0aDogbnVtYmVyLCBidWZmZXI6IG51bWJlcik6IEl0ZW1zUmFuZ2VSZXN1bHQge1xuICAgICAgICBjb25zdCBkID0gdGhpcy5fZGltZW5zaW9ucztcbiAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gZC5pdGVtSGVpZ2h0ICogaXRlbXNMZW5ndGg7XG5cbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgc2Nyb2xsUG9zKTtcbiAgICAgICAgY29uc3QgaW5kZXhCeVNjcm9sbFRvcCA9IHNjcm9sbFRvcCAvIHNjcm9sbEhlaWdodCAqIGl0ZW1zTGVuZ3RoO1xuICAgICAgICBsZXQgZW5kID0gTWF0aC5taW4oaXRlbXNMZW5ndGgsIE1hdGguY2VpbChpbmRleEJ5U2Nyb2xsVG9wKSArIChkLml0ZW1zUGVyVmlld3BvcnQgKyAxKSk7XG5cbiAgICAgICAgY29uc3QgbWF4U3RhcnRFbmQgPSBlbmQ7XG4gICAgICAgIGNvbnN0IG1heFN0YXJ0ID0gTWF0aC5tYXgoMCwgbWF4U3RhcnRFbmQgLSBkLml0ZW1zUGVyVmlld3BvcnQpO1xuICAgICAgICBsZXQgc3RhcnQgPSBNYXRoLm1pbihtYXhTdGFydCwgTWF0aC5mbG9vcihpbmRleEJ5U2Nyb2xsVG9wKSk7XG5cbiAgICAgICAgbGV0IHRvcFBhZGRpbmcgPSBkLml0ZW1IZWlnaHQgKiBNYXRoLmNlaWwoc3RhcnQpIC0gKGQuaXRlbUhlaWdodCAqIE1hdGgubWluKHN0YXJ0LCBidWZmZXIpKTtcbiAgICAgICAgdG9wUGFkZGluZyA9ICFpc05hTih0b3BQYWRkaW5nKSA/IHRvcFBhZGRpbmcgOiAwO1xuICAgICAgICBzdGFydCA9ICFpc05hTihzdGFydCkgPyBzdGFydCA6IC0xO1xuICAgICAgICBlbmQgPSAhaXNOYU4oZW5kKSA/IGVuZCA6IC0xO1xuICAgICAgICBzdGFydCAtPSBidWZmZXI7XG4gICAgICAgIHN0YXJ0ID0gTWF0aC5tYXgoMCwgc3RhcnQpO1xuICAgICAgICBlbmQgKz0gYnVmZmVyO1xuICAgICAgICBlbmQgPSBNYXRoLm1pbihpdGVtc0xlbmd0aCwgZW5kKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wUGFkZGluZyxcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgZW5kXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXREaW1lbnNpb25zKGl0ZW1IZWlnaHQ6IG51bWJlciwgcGFuZWxIZWlnaHQ6IG51bWJlcikge1xuICAgICAgICBjb25zdCBpdGVtc1BlclZpZXdwb3J0ID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcihwYW5lbEhlaWdodCAvIGl0ZW1IZWlnaHQpKTtcbiAgICAgICAgdGhpcy5fZGltZW5zaW9ucyA9IHtcbiAgICAgICAgICAgIGl0ZW1IZWlnaHQsXG4gICAgICAgICAgICBwYW5lbEhlaWdodCxcbiAgICAgICAgICAgIGl0ZW1zUGVyVmlld3BvcnRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRTY3JvbGxUbyhpdGVtVG9wOiBudW1iZXIsIGl0ZW1IZWlnaHQ6IG51bWJlciwgbGFzdFNjcm9sbDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1Cb3R0b20gPSBpdGVtVG9wICsgaXRlbUhlaWdodDtcbiAgICAgICAgY29uc3QgdG9wID0gbGFzdFNjcm9sbDtcbiAgICAgICAgY29uc3QgYm90dG9tID0gdG9wICsgdGhpcy5kaW1lbnNpb25zLnBhbmVsSGVpZ2h0O1xuXG4gICAgICAgIGlmIChpdGVtQm90dG9tID4gYm90dG9tKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9wICsgaXRlbUJvdHRvbSAtIGJvdHRvbTtcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtVG9wIDw9IHRvcCkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1Ub3A7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iXX0=