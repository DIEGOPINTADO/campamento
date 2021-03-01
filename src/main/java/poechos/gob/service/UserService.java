package poechos.gob.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import poechos.gob.model.Role;
import poechos.gob.model.User;
import poechos.gob.repository.RoleRepository;
import poechos.gob.repository.UserRepository;

import java.util.Collections;

@Service
public class UserService {

    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;
    private final UserRepository userRepository;

    public UserService(PasswordEncoder passwordEncoder, RoleRepository roleRepository, UserRepository userRepository) {
        this.passwordEncoder = passwordEncoder;
        this.roleRepository = roleRepository;
        this.userRepository = userRepository;
    }

    public void registerNewUser(User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Role roleUser = roleRepository.findByName("USER");
        user.setRoles(Collections.singleton(roleUser));
        userRepository.save(user);
    }

}
