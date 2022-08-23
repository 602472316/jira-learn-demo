/*
 * @Author: wangzhenfei
 * @Date: 2022-08-23 14:35:31
 * @LastEditTime: 2022-08-23 15:54:53
 * @LastEditors: wangzhenfei
 * @Description:
 * @FilePath: /jira/src/reportWebVitals.ts
 *
 */
import { ReportHandler } from "web-vitals";

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);

      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
