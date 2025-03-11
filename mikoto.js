let body = $response.body;
if (body) {
  try {
    let obj = JSON.parse(body);
    if (obj && obj.data) {
      
      let originalName = obj.data.song_name || "";
      
      // 自定义歌手
      let customSinger = "(Cover 聪聪)"; // 这里修改为你想要的自定义歌手
      
      //obj.data.song_name = originalName + " - " + customSinger;
      obj.data.song_name = originalName + customSinger;
      // 将歌手改为固定文本
      obj.data.song_singer = "聪聪那年";
      // 修改封面为指定链接
      obj.data.cover = "https://q1.qlogo.cn/g?b=qq&nk=1781922652&s=640";
    }
    $done({body: JSON.stringify(obj)});
  } catch (e) {
    console.log("解析失败:", e);
    $done({body});
  }
} else {
  $done({});
}

