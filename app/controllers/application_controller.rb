class ApplicationController < ActionController::Base
    before_action :configure_devise_params, if: :devise_controller?
    skip_before_action :verify_authenticity_token
    
    def configure_devise_params
        devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
    end
end
