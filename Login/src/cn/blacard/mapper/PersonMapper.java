package cn.blacard.mapper;

import java.util.List;

import cn.blacard.entity.Person;

public interface PersonMapper {
	//��ѯ���ݿ�Ľӿڣ�DAO��
//	public Person addPerson(String per_name,String per_pass );
	public Person selectPerson(String per_name,String per_pass);
	public List<Person> selectAll();
	public int addPerson(String per_name,String per_pass);
}
