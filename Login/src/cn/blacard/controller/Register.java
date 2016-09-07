package cn.blacard.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/signUp")
public class Register {
	
	@RequestMapping("/register")
	public void register(HttpServletRequest req,HttpServletResponse resp){
		String per_name =req.getParameter("per_name");
		String per_pass =req.getParameter("per_pass");
		System.out.println("◊¢≤·µƒ’À∫≈√‹¬Î «£∫"+per_name+"and"+per_pass);
		try {
			resp.sendRedirect("registerSucceed.jsp");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
}
