package cn.blacard.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import cn.blacard.mapper.PersonMapper;
import cn.blacard.service.RegisterService;

public class RegisterServiceImpl implements RegisterService {
	@Autowired
	private PersonMapper personMapper;
	
	public int addPerson(String per_name, String per_pass) {
		// TODO Auto-generated method stub
		int addPer = personMapper.addPerson(per_name, per_pass);
		return addPer;
	}
}
