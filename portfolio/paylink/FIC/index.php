<!--
<?php
    header('Content-Type: text/html; charset=UTF-8');
    define("ROOT_PATH", $_SERVER["DOCUMENT_ROOT"]."/");
	require_once(ROOT_PATH."admin/session.php");
    require_once(ROOT_PATH."config/global_config.php");
    require_once(ROOT_PATH."lib/DB.php");
    require_once(ROOT_PATH."lib/function.php");


    //공지사항
	$sql = "SELECT count(*) FROM notice WHERE 1 = 1";
	$total_notice = $db->get_var($sql);

?>
-->

<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="M_Adnan">
    <title>FIC</title>

    <!-- Bootstrap Core CSS -->
    <link type="text/css" href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link type="text/css" href="css/style.css" rel="stylesheet">
    <link type="text/css" href="css/responsive.css" rel="stylesheet">
    <link type="text/css" href="fonts/flaticon.css" rel="stylesheet">
    <link type="text/css" href="css/ionicons.min.css" rel="stylesheet">
    <link type="text/css" href="css/main.css" rel="stylesheet">
    <link type="text/css" href="css/jquery.mCustomScrollbar.css" rel="stylesheet"  media="all" />
    <!-- JavaScripts -->
    <script src="js/modernizr.js"></script>

    <!-- Online Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Merriweather:300,400,700,900|Montserrat:300,400,500,600,700,800" rel="stylesheet">
    <link href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->

</head>

<body>

    <!-- LOADER -->
    <div id="loader">
        <div class="s1">
          <div class="s b sb1"></div>
          <div class="s b sb2"></div>
          <div class="s b sb3"></div>
          <div class="s b sb4"></div>
        </div>


        <div class="s2">
          <div class="s b sb5"></div>
          <div class="s b sb6"></div>
          <div class="s b sb7"></div>
          <div class="s b sb8"></div>
        </div>

        <div class="bigcon">
          <div class="big b"></div>
        </div>
    </div>
    
    <div id="header-wrap">
        
    </div>

    <!-- Wrap -->
    <div id="wrap">

        <!-- header -->
        <header class="sticky">
            <div class="headerBar">
                <div class="container">

                    <!-- Logo -->
                    <div class="logo">
                        
                    </div>
<!--
                    <div class="language">
                        <a href="#">KOR</a>
                    </div>
-->
                    <div class="clearfix"></div>
                </div>
            </div>
            <div class="container">
                <nav class="navbar ownmenu navbar-expand-lg">
                    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <a href="#" class="mobile-menu">Menu</a>
                        <ul class="nav">
                            <li class="scroll">
                                <a href="#home">HOME</a>
                            </li>
                            <li class="scroll">
                                <a href="#distribution">DISTRIBUTION</a>
                            </li>
                            <li class="scroll">
                                <a href="#platform">PLATFORM</a>
                            </li>
                            <li class="scroll">
                                <a href="#roadmap">ROADMAP</a>
                            </li>
                            <li class="scroll">
                                <a href="#whitepager">WHITEPAPER</a>
                            </li>
                            <li class="scroll">
                                <a href="#partners">PARTNERS</a>
                            </li>
                            <!--<li class="scroll">
                                <a href="#notice">NOTICE</a>
                            </li>
                            <li class="scroll">
                                <a href="#contact">CONTACT</a>
                            </li>-->
                        </ul>

                    </div>

                </nav>
            </div>

        </header>

        <!-- HOME MAIN  -->
        <section class="simple-head" data-stellar-background-ratio="0.5" id="home">
            <!-- Particles -->
            <div class="container padding-top-150">
                <h1 class="upline">
                    <span data-scroll="toggle(.fromTopIn, .fromTopOut)" class="pointColor">GOLD TRADING</span><br />
                    <span data-scroll="toggle(.fromTopIn, .fromTopOut)" class="white">LIFE-BASED</span><br />
                    <span data-scroll="toggle(.fromTopIn, .fromTopOut)" class="pointColor">BLOCK CHAIN</span><br />
                    <span data-scroll="toggle(.fromTopIn, .fromTopOut)" class="white">NEW STANDARDS</span>
                </h1>
                <p class="white padding-top-10 padding-bottom-150">
                    <span data-scroll="toggle(.fromTopIn, .fromTopOut)">금 거래와 금융이 만나</span><br />
                    <span data-scroll="toggle(.fromTopIn, .fromTopOut)">실물기반 블록체인 생태계의</span><br />
                    <span data-scroll="toggle(.fromTopIn, .fromTopOut)">개로운 기준을 제시합니다.</span>
                </p>
            </div>
            
            <div class="home_contant">
                <div class="home_contant_wrap">
                    <div class="home_contant_sub1">
                        <h1 class="upline">
                            <span class="white" data-scroll="toggle(.fromTopIn, .fromTopOut)">MY ETHER</span><br />
                            <span class="white" data-scroll="toggle(.fromTopIn, .fromTopOut)">WALLET FIC</span><br />
                            <span class="white" data-scroll="toggle(.fromTopIn, .fromTopOut)">토큰 추가 방법</span>
                        </h1>
                        <p class="white padding-top-10">
                            <span data-scroll="toggle(.fromTopIn, .fromTopOut)">FIC를 보관하는 것은</span><br />
                            <span data-scroll="toggle(.fromTopIn, .fromTopOut)">세상에서 가장 안전한 자산을</span><br />
                            <span data-scroll="toggle(.fromTopIn, .fromTopOut)">보관하는 것입니다.</span>
                        </p>
                    </div>

                    <div class="web_allow" data-scroll="toggle(.fromTopIn, .fromTopOut)"></div>

                    <div class="home_contant_sub2">
                        <span class="pointColor" data-scroll="toggle(.fromTopIn, .fromTopOut)">MY ETHER WALLET FIC</span>
                        <p class="padding-top-10" data-scroll="toggle(.fromTopIn, .fromTopOut)">
                            정식 FIC 커스텀 토큰을 추가해주시기 바랍니다. FIC 주소는 아래와 같습니다. 사칭에 주의 해주시기 바랍니다. 
                        </p>
                        <p class="ficAddr" data-scroll="toggle(.fromTopIn, .fromTopOut)">
                            <span data-scroll="toggle(.fromTopIn, .fromTopOut)">· Contract : 0xD7Af3588fab87d59D4427534aCEe82e0Ca25fDD6</span>
                            <br/>
                            <span data-scroll="toggle(.fromTopIn, .fromTopOut)">· Symbol  : FIC</span>
                            <br/>
                            <span data-scroll="toggle(.fromTopIn, .fromTopOut)">· Decimals : 8</span>
                        </p>
                        <!--<a class="button" data-scroll="toggle(.fromTopIn, .fromTopOut)" href="#" target="_blank">MY ether wallet link</a>-->

                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </section>

        <!-- Content -->
        <div id="content">

            <!-- Why Choose Us -->
            <section id="distribution">

                <!-- Why Choose Us  ROW-->
                <div class="distribution padding-top-150">
                    <div class="container">
                        <h1 class="upline">DISTRIBUTION</h1>
                        <p>프로젝트의 신뢰확보 투자자들의 리스크를 최소화합니다.</p>
                        <div class="distribution-contant">
                            <div class="distribution-image1"></div>
<!--                            <div class="distribution-image2"></div>-->
                            <div class="clearfix"></div>
                            <div class="distribution-button-wrap">
                                <div class="distribution-button">
                                    <div class="distribution-button-image"><span></span></div>
                                    <p>Issuing FIC</p>
                                </div>
                                <div class="distribution-button">
                                    <div class="distribution-button-image"><span></span></div>
                                    <p>Private Sale</p>
                                </div>
                                <div class="distribution-button">
                                    <div class="distribution-button-image"><span></span></div>
                                    <p>Listing FIC</p>
                                </div>
                            </div>
                            <!--<div class="distribution-table-wrap">
                                <div class="distribution-image3"></div>
                                <table class="distribution-table">
                                    <colgroup>
                                        <col width="20%" />
                                        <col width="20%" />
                                        <col width="20%" />
                                        <col width="10%" />
                                        <col width="20%" />
                                        <col width="10%" />
                                    </colgroup>
                                    <tr>
                                        <th>Sale</th>
                                        <th>Period</th>
                                        <th>Hard Cap.</th>
                                        <th>Distribution</th>
                                        <th>Etherium</th>
                                        <th>Fane/Eth</th>
                                    </tr>
                                    <tr>
                                        <td><span class="pointColor">Private Sale</span></td>
                                        <td>2018.09.03~15</td>
                                        <td>100,000,000</td>
                                        <td>10%</td>
                                        <td>12,500</td>
                                        <td>8,000</td>
                                    </tr>
                                    <tr>
                                        <td><span class="pointColor">ICO</span></td>
                                        <td>2018.09.17~30</td>
                                        <td>100,000,000</td>
                                        <td>10%</td>
                                        <td>25,000</td>
                                        <td>4,000</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" class="total">Total</td>
                                        <td class="subTotal">200,000,000</td>
                                        <td class="subTotal">20%</td>
                                        <td class="subTotal">37,500</td>
                                        <td class="subTotal">-</td>
                                    </tr>
                                </table>
                            </div>-->
                        </div>
                    </div>
                    
                </div>
                
                <div class="ecosystem padding-top-150">
                    <div class="container">
                        <h1 class="upline">COIN ECOSYSTEM</h1>
                        <div class="ecosystem-image"></div>
                    </div>
                </div>
                
                <div class="partnerships padding-top-150">
                    <div class="container">
                        <h1 class="upline">PARTNERSHIPS</h1>
                        <p>지속적으로 전 세계 다양한 업체들과 파트너십을 체결하여 FIC의 생태계를 조성합니다.</p>
                        <span>전 세계 모든 파트너사들은 자사의 FIC 플랫폼에 결합하여 이용자들은 FIC로 플랫폼 안에서 결제를 통해 실물 금융자산 구매 및 서비스를 받을 수 있습니다.</span>
                        <div class="partnerships-image"></div>
                    </div>
                </div>
                
            </section>

            <!-- Token Distribution -->
            <section class="padding-top-150" id="platform">
                <div class="container">
                    <h1 class="upline">PLATFORM</h1>
                    
                    <ul class="platform-list">
                        <li data-scroll="toggle(.fromTopIn, .fromTopOut)">
                            <div class="img-platform1"></div>
                        </li>
                        <li data-scroll="toggle(.fromTopIn, .fromTopOut)">
                            <div class="img-platform2"></div>
                        </li>
                        <!--<li data-scroll="toggle(.fromTopIn, .fromTopOut)">
                            <div class="img-platform3"></div>
                        </li>-->
                        <li data-scroll="toggle(.fromTopIn, .fromTopOut)">
                            <div class="img-platform4"></div>
                        </li>
                        <li data-scroll="toggle(.fromTopIn, .fromTopOut)">
                            <div class="img-platform5"></div>
                        </li>
                        <li data-scroll="toggle(.fromTopIn, .fromTopOut)">
                            <div class="img-platform6"></div>
                        </li>
                    </ul>
                    <div class="clearfix"></div>
                </div>
            </section>

            <!-- Development -->
            <section class="padding-top-150" id="roadmap">
                <div class="container">
                    <h1 class="upline">ROADMAP</h1>
                    <ul class="roadmap-list">
                        <li data-scroll="toggle(.fromTopIn, .fromTopOut)">
                            <div class="date">2019.2Q</div>
                            <div class="web-timeline first"></div>
                            <div class="content">
                                <!--<p>· 국내 거래소 상장</p>-->
                                <p>· 부동산 프로젝트 진행</p>
                            </div>
                        </li>
                        <li data-scroll="toggle(.fromTopIn, .fromTopOut)">
                            <div class="date">2019.2Q</div>
                            <div class="web-timeline"></div>
                            <div class="content">
                                <p>· 코인 담보대출 시작</p>
                                <p>· 플랫폼 추가 기능 오픈</p>
                            </div>
                        </li>
                        <li data-scroll="toggle(.fromTopIn, .fromTopOut)">
                            <div class="date">2019.1Q</div>
                            <div class="web-timeline"></div>
                            <div class="content">
                                <p>· 다이아몬드, 거래 시작 테스트</p>
                            </div>
                        </li>
                        <li data-scroll="toggle(.fromTopIn, .fromTopOut)">
                            <div class="date">2019.1Q</div>
                            <div class="web-timeline"></div>
                            <div class="content">
                                <p>· 세계10위권 거래소 추가상장(예정)</p>
                            </div>
                        </li>
                        <li data-scroll="toggle(.fromTopIn, .fromTopOut)">
                            <div class="date">2019.1Q</div>
                            <div class="web-timeline"></div>
                            <div class="content">
                                <p>· 플랫폼 오픈, 금거래 테스트</p>
                            </div>
                        </li>
                        <li data-scroll="toggle(.fromTopIn, .fromTopOut)">
                            <div class="date">2018.12</div>
                            <div class="web-timeline"></div>
                            <div class="content">
                                <p>· 국내 거래소 상장</p>
                            </div>
                        </li>
                        <li data-scroll="toggle(.fromTopIn, .fromTopOut)">
                            <div class="date">2018.11</div>
                            <div class="web-timeline"></div>
                            <div class="content">
                                <p>· 프라이빗 진행</p>
                            </div>
                        </li>
                        <li data-scroll="toggle(.fromTopIn, .fromTopOut)">
                            <div class="date">2018.02</div>
                            <div class="web-timeline"></div>
                            <div class="content">
                                <p>· 다이아몬드 파트너사 선정 및 코인 개발</p>
                            </div>
                        </li>
                        <li data-scroll="toggle(.fromTopIn, .fromTopOut)">
                            <div class="date">2017.10</div>
                            <div class="web-timeline"></div>
                            <div class="content">
                                <p>· 코인 담보대출을 위해 금융회사 준비</p>
                            </div>
                        </li>
                        <li data-scroll="toggle(.fromTopIn, .fromTopOut)">
                            <div class="date">2017.08</div>
                            <div class="web-timeline"></div>
                            <div class="content">
                                <p>· 금 거래서 파트너사 선정</p>
                            </div>
                        </li>
                        <li data-scroll="toggle(.fromTopIn, .fromTopOut)">
                            <div class="date">2017.05</div>
                            <div class="web-timeline"></div>
                            <div class="content">
                                <p>· FIC 프로젝트 구상</p>
                            </div>
                        </li>
                        <li data-scroll="toggle(.fromTopIn, .fromTopOut)">
                            <div class="date">2017.02</div>
                            <div class="web-timeline"></div>
                            <div class="content">
                                <p>· 파트너사 시장 조사</p>
                            </div>
                        </li>
                        <li data-scroll="toggle(.fromTopIn, .fromTopOut)">
                            <div class="date">2016.08</div>
                            <div class="web-timeline"></div>
                            <div class="content">
                                <p>· FIC 프로젝트 개발진 및 팀 구성</p>
                            </div>
                        </li>
                        <li data-scroll="toggle(.fromTopIn, .fromTopOut)">
                            <div class="date">2016.07</div>
                            <div class="web-timeline"></div>
                            <div class="content">
                                <p>· 블록체인 관련 업체들과 협업 등 </p>
                                <p>· FIC 프로젝트 구체화 작업</p>
                            </div>
                        </li>
                        <li data-scroll="toggle(.fromTopIn, .fromTopOut)">
                            <div class="date">2016.05</div>
                            <div class="web-timeline"></div>
                            <div class="content">
                                <p>· FIC 프로젝트 구상</p>
                            </div>
                        </li>
                        <li data-scroll="toggle(.fromTopIn, .fromTopOut)">
                            <div class="date">2016.01</div>
                            <div class="web-timeline last"></div>
                            <div class="content">
                                <p>· 시장조사/파트너사 조사</p>
                            </div>
                        </li>
                        
                    </ul>
                    <div class="clearfix"></div>
                </div>
            </section>



            <!-- Road Map -->
            <section class="padding-top-150" id="whitepager">
                <div class="container">
                    <h1 class="upline">WHITE PAPER</h1>
                    <p class="padding-bottom-20">금거래를 중심으로 전 세계 블록체인 허브로 성장하겠습니다.</p>
                    <a class="button" data-scroll="toggle(.fromTopIn, .fromTopOut)" href="#" target="_blank">White Paper Down</a>
                    <div class="whitepager-youtube">
                    <!-- width: 560, 315 -->
                        <iframe width="100%" height="677" id="whitepager-youtube" src="https://www.youtube.com/embed/4nVo1ViT20g?rel=0&amp;showinfo=0"
                            frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                </div>
            </section>

            <section class="padding-top-150" id="partners">
                <div class="container">
                    <h1 class="upline">PARTNERS</h1>
                    <div class="partners-image"></div>
                </div>
            </section>
            
            <!--<section class="padding-top-150" id="notice">
                <div class="container">
                    <h1 class="upline">NOTICE</h1>
                    <ul class="notice-list" id="notice-list">
                    	
                        
                    </ul>
                    <div class="paging" id="paging">
                        <a href="#" class="first">first</a>
                        <a href="#" class="prev">prev</a>
                        <a href="#" class="num current">01</a>
                        <a href="#" class="num">02</a>
                        <a href="#" class="num">03</a>
                        <a href="#" class="num">04</a>
                        <a href="#" class="num">05</a>
                        <a href="#" class="next">next</a>
                        <a href="#" class="last">last</a>
                    </div>
                </div>
            </section>-->
           
           

            <!-- Team Members -->
            <!--<section class="padding-top-150" id="contact">
                <div class="container">
                    <h1 class="upline">CONTACT</h1>
                    <p class="pointColor">ADDRESS</p>
                    <span>Singapore : 9 Temasek Boulevard #04-02, Suntec Tower Two </span>
                    
                    
                    <div class="contact-box">
                        <form role="form" id="contact_form" class="contact-form" method="post" onSubmit="send_contact(); return false;">
                            <ul class="row nolist-style">
                                <li class="col-sm-12" data-scroll="toggle(.fromTopIn, .fromTopOut)">
                                    <input type="radio" name="type" id="type1" value="제휴문의(매체)" checked="checked">
                                    <label class="radio-inline" for="type1"><span></span>제휴문의(매체)</label>
                                    <input type="radio" name="type" id="type2" value="제휴문의(일반)">
                                    <label class="radio-inline" for="type2"><span></span>제휴문의(일반)</label>
                                    <input type="radio" name="type" id="type3" value="고객서비스">
                                    <label class="radio-inline" for="type3"><span></span>고객서비스</label>
                                </li>
                                <li class="col-sm-6" data-scroll="toggle(.fromTopIn, .fromTopOut)">
                                    <label class="w-100">
                                        <input type="text" class="form-control" name="name" id="name" placeholder="Your Name" data-langNum="151">
                                    </label>
                                </li>
                                <li class="col-sm-6" data-scroll="toggle(.fromTopIn, .fromTopOut)">
                                    <label class="w-100">
                                        <input type="text" class="form-control" name="email" id="email" placeholder="Your Email" data-langNum="152">
                                    </label>
                                </li>
                                <li class="col-sm-12" data-scroll="toggle(.fromTopIn, .fromTopOut)">
                                    <label class="w-100">
                                        <textarea class="form-control" name="message" id="message" rows="5" placeholder="Your Message" data-langNum="153"></textarea>
                                    </label>
                                </li>
                                <li class="col-sm-12" data-scroll="toggle(.fromTopIn, .fromTopOut)">
                                    <button type="submit" class="btn btn-inverse" value="submit" id="btn_submit">Send Message</button>
                                </li>
                            </ul>
                        </form>

                    </div>

                </div>
            </section>-->

            <!-- Join our community -->

        </div>

        <!-- Footer -->
        <footer>
            <!-- Rights -->
            <div class="rights">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <p class="copyright">Copyright 2018 fnfinacialplatform PTE. LTD. All rights reserved.</p>
                        </div>
                        <!--<div class="col-md-6 text-right sns-footer">
                            <a href="https://twitter.com/m2o29279408" target="_blank">
                                <img src="images/icon_fb.png" />
                            </a>
                            <a href="https://www.reddit.com/user/mtoglobal" target="_blank">
                                <img src="images/icon_tw.png" />
                            </a>
                            <a href="https://steemit.com/@m2o" target="_blank">
                                <img src="images/icon_rd.png" />
                            </a>
                            <a href="http://line.me/ti/g/Ja8jIYkyK4" target="_blank">
                                <img src="images/icon_sns.png" />
                            </a>
                            <a href="#" id="sns_tele" target="_blank">
                                <img src="images/icon_tg.png" />
                            </a>

                        </div>-->
                    </div>
                </div>
            </div>
        </footer>
    </div>


    <div class="pop_layer" id="popupContent">
        <div class="pop_size">
            <div class="pop_div">
                <div class="layer_top">
                    <p class="date" id="popup_date">2018-08-31</p>
                    <p class="title" id="popup_title">Popup Sample</p>
                </div>
                <div class="layer_con" id="content-box">
                    <div id="popup_content">
                        <p class="title">가나다라마바사아자차카파타하공지사항제목</p>
                        <p class="content">가나다라마바사아자차카파타하가나다라마바사아자차카파타하본문제목

가나다라마바사아자차카파타하가나다라마바사아자차카파타하가나다라마바사아자차카파타하가나다라마바사아자차카파타하가나다라마바사아자차카파타하가나다라마바사아자차카파타하공지사항내용가나다라마바사아자차카파타하가나다라마바사아자차카파타하가나다라마바사아자차카파타하가나다라마바사아자차카파타하</p>
                    </div>
                    
                </div>
                <a href="javascript:void(0)" class="layer_close">
                    <img src="./images/popup_close.png" alt="닫기" />
                </a>
            </div>
        </div>
    </div>

    <!-- GO TO TOP -->
    <a href="#" class="cd-top">
        <i class="ion-chevron-up"></i>
    </a>
    <!-- GO TO TOP End -->

    <!-- Script -->
    <script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/jquery.sticky.js"></script>
    <script type="text/javascript" src="js/jquery.magnific-popup.min.js"></script>
    <script type="text/javascript" src="js/ScrollTrigger.min.js"></script>
    <script type="text/javascript" src="js/main.js?5"></script>
    <script type="text/javascript" src="js/jquery.mCustomScrollbar.js" charset="utf-8"></script>
    <script>
    notice_load(<?=$total_notice?>,0,3);	
    </script>
</body>

</html>