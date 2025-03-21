[rewrite_local]
^https:\/\/(www\.hhlqilongzhu\.cn|api\.xingzhige\.com)\/.* url script-response-body https://raw.githubusercontent.com/ccnn-666/iOS/refs/heads/main/hb.js

[mitm] 
hostname = api.xingzhige.com , www.hhlqilongzhu.cn
