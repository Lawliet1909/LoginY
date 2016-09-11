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
	 * ��֤
	 * ʵ�ֽӿ���ķ���
	 * (non-Javadoc)
	 * @see cn.blacard.service.LoginService#selectPersonByName(java.lang.String)
	 */
	@Override
	public Person selectPerson(String per_name , String per_pass) {
		//�����û���ʵ�����û�����
		//ͨ��pass��name����ѯ�û�
		Person per = (Person) personMapper.selectPerson(per_name, per_pass);
		if(per!=null && per.getPer_pass().equals(per_pass)){
			System.out.println("�ɹ���");
			return per;
		}
		// TODO Auto-generated method stub
		return null;
	}

	//��ѯ�����û���������
	@Override
	public List<Person> selectAll() {
		List<Person> perAll =  personMapper.selectAll();
		return perAll;
	}

	//����û���������
	public int addPerson(String per_name, String per_pass) {
		// TODO Auto-generated method stub
		int addPerson = personMapper.addPerson(per_name, per_pass);
		return addPerson;
	}



}
