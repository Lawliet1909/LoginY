package cn.blacard.controller;

import java.io.IOException;

import javax.annotation.Resource;
import javax.annotation.Resources;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import cn.blacard.entity.Person;
import cn.blacard.service.LoginService;



@Controller
@RequestMapping("/login")

public class LoginController {

	@Autowired
	private LoginService loginService;
	@RequestMapping("/into")
	public void login(HttpServletRequest req,HttpServletResponse resp) throws IOException{

		
		String per_name = req.getParameter("per_name");
		String per_pass = req.getParameter("per_pass");
		System.out.println("”√ªß√˚£∫"+per_name+" and √‹¬Î£∫"+per_pass);
		if(loginService.selectPersonByName(per_name, per_pass)!=null){
			resp.sendRedirect("/Login/loginSucceed.jsp");
//			System.out.println("true");
		}else{
//			System.out.println("false");
			resp.sendRedirect("/Login/loginFailed.jsp");
		}
			
	}
}
