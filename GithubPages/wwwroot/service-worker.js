// In development, always fetch from the network and do not enable offline support.
// This is because caching would make development more difficult (changes would not
// be reflected on the first load after each change).
self.addEventListener('fetch', () => { });


// サービスワーカ-登録済でリクエストを感知した際に発火するイベント
self.addEventListener('fetch', (event) => {
	// ブラウザー既定のfetchハンドリングを抑止して、 自前でResponse用のPromiseを提供する
	console.log(event.request);
})