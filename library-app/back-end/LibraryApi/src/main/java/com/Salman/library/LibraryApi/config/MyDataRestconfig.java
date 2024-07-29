package com.Salman.library.LibraryApi.config;


import com.Salman.library.LibraryApi.entity.Book;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class MyDataRestconfig implements RepositoryRestConfigurer {
    private String theAllowingOrigins = "http://localhost:9000";


    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration configuration , CorsRegistry cors){
        HttpMethod[] theUnsportedActions = {HttpMethod.POST , HttpMethod.PATCH , HttpMethod.DELETE ,  HttpMethod.PUT};

        configuration.exposeIdsFor(Book.class);
        disableHttpMethods(Book.class , configuration , theUnsportedActions);

        /* Configure CORS Mapping */

        cors.addMapping(configuration.getBasePath() + "/**").allowedOrigins(theAllowingOrigins);
    }

    private void disableHttpMethods(Class<Book> bookClass, RepositoryRestConfiguration configuration, HttpMethod[] theUnsportedActions) {

        configuration.getExposureConfiguration().forDomainType(bookClass)
                .withItemExposure(
                        (metdata, httpMethods) -> httpMethods.disable(theUnsportedActions)

                )
                .withCollectionExposure(((metdata, httpMethods) -> httpMethods.disable(theUnsportedActions) ))
        ;

    }
}
