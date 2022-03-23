package com.example.cloudcomputingassignment1.config;

import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled=true, securedEnabled=true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .requestMatchers(PathRequest.toStaticResources().atCommonLocations()).permitAll()
                .antMatchers("/**").permitAll()
                .anyRequest().authenticated();
        http.csrf().disable();
    }
}
