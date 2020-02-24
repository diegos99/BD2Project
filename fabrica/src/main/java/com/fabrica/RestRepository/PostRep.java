package com.fabrica.RestRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

import com.fabrica.Document.Post;

@Repository
public class PostRep {

	@Autowired
	private MongoTemplate mongoTemplate;
	
	public Post save(Post post) {
		return mongoTemplate.save(post);
	}
	
	public List<Post> findAll(){
		return mongoTemplate.findAll(Post.class);
	}
}
