package com.techoopt.techoopt;



import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String main() {

        return "main";
    }
    @GetMapping("/contact")
    public String contact() {

        return "contact";
    }

    @GetMapping("/about")
    public String about() {

        return "aboutcomp";
    }


    @GetMapping("/catalog")
    public String catalog() {

        return "catalog";
    }
}
