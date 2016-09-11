package cn.blacard.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import cn.blacard.entity.Person;
import cn.blacard.mapper.PersonMapper;
import cn.blacard.service.LoginService;

@Controller
public class LoginServiceImpl implements LoginService{
	@Autowired
	private PersonMapper personMapper;
	
	/*
	 * 验证
	 * 实现接口里的方法
	 * (non-Javadoc)
	 * @see cn.blacard.service.LoginService#selectPersonByName(java.lang.String)
	 */
	@Override
	public Person selectPerson(String per_name , String per_pass) {
		//根据用户名实例化用户对象
		//通过pass和name来查询用户
		Person per = (Person) personMapper.selectPerson(per_name, per_pass);
		if(per!=null && per.getPer_pass().equals(per_pass)){
			System.out.println("成功！");
			return per;
		}
		// TODO Auto-generated method stub
		return null;
	}

	//查询所有用户名和密码
	@Override
	public List<Person> selectAll() {
		List<Person> perAll =  personMapper.selectAll();
		return perAll;
	}

	//添加用户名和密码
	public int addPerson(String per_name, String per_pass) {
		// TODO Auto-generated method stub
		int addPerson = personMapper.addPerson(per_name, per_pass);
		return addPerson;
	}



}
