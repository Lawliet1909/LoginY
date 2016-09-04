package cn.blacard.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import cn.blacard.entity.Person;
import cn.blacard.service.LoginService;

@Controller
@RequestMapping("/PersonList")
public class PersonList {
	@Autowired
	private LoginService loginService;
	
	@RequestMapping("/lists")
	public void personList(HttpServletRequest req,HttpServletResponse resp){
		
		List<Person> list = loginService.selectAll();
		
		
		
		for(int i=0;i<list.size();i++){
			System.out.println(list.get(i).getPer_name()+"<--ÕËºÅ&ÃÜÂë-->"+list.get(i).getPer_pass());
		}
		req.setAttribute("person",list);
		try {
			req.getRequestDispatcher("/personLists.jsp").forward(req, resp);
		} catch (ServletException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
//		for(int i=0;i<10;i++){
//			System.out.println(loginService.selectAll().get(1));
//		}
//		System.out.println(loginService.selectAll());
		
		
//		try {
//			resp.sendRedirect("/Login/personLists.jsp");
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		};
	}

}
