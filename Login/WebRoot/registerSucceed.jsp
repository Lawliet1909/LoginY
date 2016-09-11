 <%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>RegisterSucceed page</title>
    
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
   <jsp:include page="Header.jsp" flush="true"></jsp:include>
   <script type="text/javascript">
   	alert("注册成功！");
   </script>
    	注册成功！ <br>
    <a href="login.jsp">立刻登录</a><br>
    
	    您的注册信息如下：<hr>
	 用户名：${person.per_name}<br>
	 用户密码：${person.per_pass}

    
  </body>
</html>
