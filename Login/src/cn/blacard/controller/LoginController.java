package cn.blacard.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import cn.blacard.service.LoginService;

/*
 * 这是登录
 */

@Controller
@RequestMapping("/login")

public class LoginController {

	@Autowired
	private LoginService loginService;
	@RequestMapping("/into")
	public void login(HttpServletRequest req,HttpServletResponse resp) throws IOException{
		//前段传per_name,per_pass值到这里
		String per_name = req.getParameter("per_name");
		String per_pass = req.getParameter("per_pass");
		System.out.println("用户名："+per_name+" and 密码："+per_pass);
		//查是否有该用户名和密码，并返回登录结果页面
		if(loginService.selectPerson(per_name, per_pass)!=null){
			resp.sendRedirect("/Login/loginSucceed.jsp");
//			System.out.println("true");
		}else{
//			System.out.println("false");
			resp.sendRedirect("/Login/loginFailed.jsp");
		}
			
	}
}
