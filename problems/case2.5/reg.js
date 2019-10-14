let d1 = '<div id="container" class="main"></div>'
console.log(d1.match(/id="[^"]*"/))


"123456789".replace(/(\d)(?=(\d{3})+$)/g, '$1,')
"123456789".replace(/(?!^)(?=(\d{3})+$)/g, ',')

"123456789 123456789".replace(/(\B)(?=(\d{3}|\s)+$)/g, ',')
"123456789 123456789".replace(/(\B)(?=(\d{3})+\b)/g, ',')

'112  188'.replace(/\b(?=(\d+)\b)/g, '$$ ').replace(/(\d+)\b/g, '$1.00')

/(?=.*\d)^[a-z0-9]+/.test('sss1')
