function addHeader(page){
  var headerCode = `
  <meta content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, target-densityDpi=device-dpi' name='viewport'/>
  <link rel='stylesheet' type='text/css' href='../style.css'>
  <link rel='stylesheet' type='text/css' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'>
  <link href="https://fonts.googleapis.com/css?family=Barlow:300,300i,400,400i,500,500i,600,600i,700,700i|Playfair+Display:400,400i,700,700i,900,900i|Roboto:300,300i,400,400i,500,500i,700,700i" rel="stylesheet">
  `

  if (page == "home") {headerCode = headerCode.split('../').join('');}

  if (page == "double-page") {headerCode = headerCode.split('../').join('../../');}

  $("head").append(headerCode)
}
