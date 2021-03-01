package poechos.gob.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import poechos.gob.model.User;
import poechos.gob.service.SecurityService;
import poechos.gob.service.UserService;

@Controller
@RequestMapping("/")
public class AppWebController {

    private final UserService userService;
    private final SecurityService securityService;

    public AppWebController(UserService userService, SecurityService securityService) {
        this.userService = userService;
        this.securityService = securityService;
    }

    @GetMapping("index")
    public String login(){
        return "index";
    }

   @GetMapping("menu")
    public String menu(){
        return "menu";
   }


    @GetMapping("registration")
    public String registration(Model model){
        model.addAttribute("user", new User());
        return "registration";
    }

    @PostMapping("registration")
    public String registrationSave(User user){

        //create account
        userService.registerNewUser(user);

        //authentication
        securityService.autologin(user.getUsername(), user.getPassword());

        return "redirect:/menu";
    }

}
