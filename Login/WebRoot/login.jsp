<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>Login into</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>
  <%@include file="Header.jsp" %>
  <div align="center">
	<br><br><br><big><strong>登录</strong></big><br><br>
	
	<form action="login/into.bla" method="post">
		用户名:<input type="text" name="per_name" /><br />
		密&nbsp;&nbsp;码:<input type="password" name="per_pass" /><br />
		<input type="submit" value="登陆" />
		<a href="register.jsp">注册</a>
		<a href="/Login/index.jsp">返回主页</a>
	</form>
	</div>
  </body>
</html>
