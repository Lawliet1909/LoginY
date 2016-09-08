package cn.blacard.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import cn.blacard.entity.Person;
import cn.blacard.mapper.PersonMapper;
import cn.blacard.service.RegisterService;

public class RegisterServiceImpl implements RegisterService {
	@Autowired
	private PersonMapper personMapper;
	
	public Person addPerson(String per_name, String per_pass) {
		// TODO Auto-generated method stub
		Person addPer = (Person)personMapper.addPerson(per_name, per_pass);
		return addPer;
	}
}
