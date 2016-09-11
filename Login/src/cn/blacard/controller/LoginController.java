package cn.blacard.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import cn.blacard.service.LoginService;

/*
 * ���ǵ�¼
 */

@Controller
@RequestMapping("/login")

public class LoginController {

	@Autowired
	private LoginService loginService;
	@RequestMapping("/into")
	public void login(HttpServletRequest req,HttpServletResponse resp) throws IOException{
		//ǰ�δ�per_name,per_passֵ������
		String per_name = req.getParameter("per_name");
		String per_pass = req.getParameter("per_pass");
		System.out.println("�û�����"+per_name+" and ���룺"+per_pass);
		//���Ƿ��и��û��������룬�����ص�¼���ҳ��
		if(loginService.selectPerson(per_name, per_pass)!=null){
			resp.sendRedirect("/Login/loginSucceed.jsp");
//			System.out.println("true");
		}else{
//			System.out.println("false");
			resp.sendRedirect("/Login/loginFailed.jsp");
		}
			
	}
}
