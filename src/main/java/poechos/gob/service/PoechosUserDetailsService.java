package poechos.gob.service;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import poechos.gob.model.User;
import poechos.gob.repository.UserRepository;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.Set;

@Service("poechosUserDetailsService")
public class PoechosUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public PoechosUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Transactional
    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        User currentUser = userRepository.findByUsername(s);

        if(currentUser == null){
            throw new UsernameNotFoundException(s);
        }

        Set<GrantedAuthority> grantedAuthoritySet = new HashSet<>();
        currentUser.getRoles().forEach(rol -> {
            grantedAuthoritySet.add(new SimpleGrantedAuthority(rol.getName()));
        });
        return new org.springframework.security.core.userdetails.User(currentUser.getUsername(), currentUser.getPassword(),grantedAuthoritySet);
    }
/*
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User currentUsuario = usuarioRepository.findByUserName(username);

        if(currentUsuario== null){
            throw new UsernameNotFoundException(username);
        }

        Set<GrantedAuthority> grantedAuthoritySet = new HashSet<>();
        currentUsuario.getRoles().forEach(rol -> {
        grantedAuthoritySet.add(new SimpleGrantedAuthority(rol.getName()));
        });
        return new org.springframework.security.core.userdetails.User(currentUsuario.getNombre(), currentUsuario.getClave(),grantedAuthoritySet);
    }*/
}
