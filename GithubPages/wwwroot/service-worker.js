// In development, always fetch from the network and do not enable offline support.
// This is because caching would make development more difficult (changes would not
// be reflected on the first load after each change).
self.addEventListener('fetch', () => { });


// �T�[�r�X���[�J-�o�^�ςŃ��N�G�X�g�����m�����ۂɔ��΂���C�x���g
self.addEventListener('fetch', (event) => {
	// �u���E�U�[�����fetch�n���h�����O��}�~���āA ���O��Response�p��Promise��񋟂���
	console.log(event.request);
})