package cn.blacard.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import cn.blacard.entity.Person;
import cn.blacard.mapper.PersonMapper;
import cn.blacard.service.LoginService;

@Controller
public class LoginServiceImpl implements LoginService{
	@Autowired
	private PersonMapper personMapper;
	
	/*
	 * 验证
	 * (non-Javadoc)
	 * @see cn.blacard.service.LoginService#selectPersonByName(java.lang.String)
	 */
	@Override
	public Person selectPersonByName(String per_name , String per_pass) {
		//根据用户名实例化用户对象
		Person per = (Person) personMapper.selectPerson(per_name, per_pass);
		if(per!=null && per.getPer_pass().equals(per_pass)){
			System.out.println("成功！");
			
			return per;
			
		}
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Person> selectAll() {
		List<Person> perAll =  personMapper.selectAll();
		return perAll;
	}

}
