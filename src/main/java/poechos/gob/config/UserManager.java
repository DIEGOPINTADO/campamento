package poechos.gob.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import poechos.gob.model.Role;
import poechos.gob.model.User;
import poechos.gob.repository.RoleRepository;
import poechos.gob.repository.UserRepository;

import java.util.Collections;

@Configuration
public class UserManager implements CommandLineRunner {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    public UserManager(UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) throws Exception {

        Role role = new Role(null, "USER", null);
        roleRepository.save(role);


        User user = new User(null, "user",
                passwordEncoder.encode("1234"), Collections.singleton(role));

        userRepository.save(user);
    }
}
