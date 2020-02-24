package com.fabrica.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fabrica.Document.Post;
import com.fabrica.RestRepository.PostRep;

@RestController
// @RequestMapping("/")
public class PostController {

	@Autowired
	private PostRep postRep;
	
	@GetMapping("posts/")
	public List<Post> findAll(){
		return postRep.findAll();
	}
	
	@PostMapping("posts")
	public Post save(@RequestBody Post post) {
		return postRep.save(post);
	}
}
