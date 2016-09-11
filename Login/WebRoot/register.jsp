<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'register.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	<script src="http://code.jquery.com/jquery.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
	-->

  </head>
  
  <body>
  <%@include file="Header.jsp" %>
 	<div align="center">
    	<h2>这里是注册页面↓ </h2><br>
    <form action="/Login/signUp/register.bla" method="post">
		  <p>用户名: <input type="text" name="per_name"/></p>
		  <p>密 码：<input type="password" name="per_pass" /></p>
		  <button id="create">创建账户</button>
		  <p >已经有了一个账户? <a href="login.jsp">立刻登录</a></p>
	</form>
	</div>

  </body>
</html>
