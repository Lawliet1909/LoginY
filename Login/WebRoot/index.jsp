<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>We R Making The World A Better Place!·UpasswordHub</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<!-- 新 Bootstrap 核心 CSS 文件 -->
	<link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css">
	
	<!-- 可选的Bootstrap主题文件（一般不用引入） -->
	<link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap-theme.min.css">
	
	<!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
	<script src="http://cdn.bootcss.com/jquery/1.11.1/jquery.min.js"></script>

	<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
	<script src="http://cdn.bootcss.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
  </head>
  
  <body>
  	<!-- 
  	<div align="right">
    <a href="login.jsp">登录</a> 
    <a  href="register.jsp">注册</a>
    </div>
     
   <div class="dropdown">
	  	<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
			haha下拉
			<span class="caret"></span>
	 	</button>
	  	<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1" >
		    <li role="presentation" ><a role="menuitem" tabindex="-1" href="login.jsp">登录</a></li>
		    <li role="presentation" ><a role="menuitem" tabindex="-1" href="register.jsp">注册</a></li>
		    <li role="presentation" ><a role="menuitem" tabindex="-1" href="#">关于我们</a></li>
	 	 </ul>
   </div>
	 -->

<nav class="navbar navbar-default" role="navigation">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="http://blacard.cn/">Blacard</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Link1</a></li>
        <li><a href="#">Link2</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown1 <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
      <form class="navbar-form pull-left" role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Go</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Link3</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">登录 <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="login.jsp">登录</a></li>
            <li><a href="register.jsp">注册</a></li>
            <li><a href="#">Something else here</a></li>
            <li class="divider"></li>
            <li><a href="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=blacard.cn">关于我们</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>

<div class="container">
	<div class="jumbotron">
	  <h2>We are making the world a better place!</h2>
	  <p>The world is an awfully big place and there are accordingly a huge number of things that you can do to make it an even more incredible place to live. But sometimes having so many options can be overwhelming and there may be ways that you can help that you never thought about before. When you're feeling hopeful but lost, wikiHow has your back with this helpful guide to improving your planet and society as a whole. Just get started with Step 1 below!</p>
	  <p><a class="btn btn-primary btn-lg" href="/Login/how.htm" role="button">Learn more</a></p>
	</div>

   
	<div class="row">
	  <div class="col-sm-6 col-md-4">
	    <div class="thumbnail">
	      <img data-src="holder.js/300x300" src="http://img2.3lian.com/2014/f6/173/d/51.jpg">
	      <div class="caption">
	        <h3>唯美摄影</h3>
	        <p>.唯美你妹.</p>
	        <p><a href="#" class="btn btn-primary" role="button">查看更多</a> <a href="#" class="btn btn-default" role="button">不，我不要</a></p>
	      </div>
	    </div>
	  </div>

	  <div class="col-sm-6 col-md-4">
	    <div class="thumbnail">
	      <img data-src="holder.js/300x300" src="http://www.bz55.com/uploads/allimg/150305/139-1503051FS0.jpg">
	      <div class="caption">
	        <h3>唯美摄影</h3>
	        <p>.唯美你妹.</p>
	        <p><a href="#" class="btn btn-primary" role="button">查看更多</a> <a href="#" class="btn btn-default" role="button">不，我不要</a></p>
	      </div>
	    </div>
	  </div>

	  <div class="col-sm-6 col-md-4">
	    <div class="thumbnail">
	      <img data-src="holder.js/300x300" src="http://img15.3lian.com/2015/f1/119/d/51.jpg">
	      <div class="caption">
	        <h3>唯美摄影</h3>
	        <p>.唯美你妹.</p>
	        <p><a href="#" class="btn btn-primary" role="button">查看更多</a> <a href="#" class="btn btn-default" role="button">不，我不要</a></p>
	      </div>
	    </div>
	  </div>
	</div>

</div>
    
  </body>
</html>
