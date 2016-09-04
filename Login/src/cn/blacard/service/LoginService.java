package cn.blacard.service;

import java.util.List;

import cn.blacard.entity.Person;

public interface LoginService {
	public Person selectPersonByName(String per_name,String per_pass);
	public List<Person> selectAll();
}
