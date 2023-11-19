// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

//textというidをもつHTML要素を取得し、定数に代入する
const textTitle = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  textTitle.textContent  = 'ボタンをクリックしました'
})