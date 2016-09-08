package cn.blacard.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import cn.blacard.service.LoginService;

@Controller
@RequestMapping("/signUp")
public class Register {
	
	@Autowired
	private LoginService loginService;
	@RequestMapping("/register")
	public void register(HttpServletRequest req,HttpServletResponse resp){
		String per_name =req.getParameter("per_name");
		String per_pass =req.getParameter("per_pass");
		System.out.println("◊¢≤·µƒ’À∫≈√‹¬Î «£∫"+per_name+"and"+per_pass);
		loginService.addPerson(per_name, per_pass);
			try {
				req.getRequestDispatcher("/registerSucceed.jsp").forward(req, resp);
			} catch (ServletException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

	}
	
}
