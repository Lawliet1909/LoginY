package cn.blacard.service;

import java.util.List;

import cn.blacard.entity.Person;

public interface LoginService {
	//½Ó¿Ú
	public Person selectPerson(String per_name,String per_pass);
	public List<Person> selectAll();
	public int addPerson(String per_name,String per_pass);

}
