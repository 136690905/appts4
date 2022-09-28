import http from "@/utils/request"
export let home = function() {
   return http.get("/api/v2/activity/news?uid=121014&api-version=2")
}