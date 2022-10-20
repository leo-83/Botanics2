class Api::PlantsController < ApplicationController

    before_action :authenticate_user!
    before_action :set_plant, only: [:show, :update, :destroy]

      def index
        render json: Plant.all
       end

      def show
        render json: @plant
      end

      def create 
        plant = Plant.new
        plant.name = params[:name] 
        plant.desc = params[:desc] 
        plant.img = params[:img] 
        
        file = params[:file]

        if file && file != '' && file != "undefined"
          begin
            ext = File.extname(file.tempfile)
            cloud_image = Cloudinary::Uploader.upload(
              file, 
              public_id: file.original_filename, 
              secure: true
              )
            plant.img = cloud_image['secure_url']
            if plant.save
              render json: plant
            else
              render json: { errors: user.errors.full_messages }, status: 422
            end
          rescue => e
            render json: { errors: e }, status: 422
          end
        else
          if plant.save
            render json: plant
          else
            render json: { errors: user.errors.full_messages }, status: 422
          end
        end
      end

      def update 
        plant = Plant.find(params[:id])
        plant.name = params[:name] ? params[:name] : plant.name
        plant.desc = params[:desc] ? params[:desc] : plant.desc
        plant.img = params[:img] ? params[:img] : plant.img

        file = params[:file]

  
      if file && file != '' && file != 'undefined'
        begin
          ext = File.extname(file.tempfile)
          cloud_image = Cloudinary::Uploader.upload(
            file, 
            public_id: file.original_filename, 
            secure: true
          )
          plant.img = cloud_image['secure_url']

          if plant.save 
            render json: plant 
          else 
            render json: { errors: user.errors.full_messages}, status: 422
          end
        rescue => e             
          render json: { errors: e }, status: 422
        end
      else
        if plant.save 
          render json: plant 
        else 
          render json: { errors: user.errors.full_messages}, status: 422
        end
      end
  
    end
        # if @plant.update(plant_params)
        #   render json: @plant
        # else
        #   render json: { errors: @plant.errors }, status: :unprocessable_entity
        # end
      

      def destroy
        @plant.destroy
        render json: { message: 'plant deleted' }
      end

      private 
      def plant_params
        params.require(:plant).permit(:name, :desc, :img)
      end
  
      def set_plant
        @plant = Plant.find(params[:id])
      end
end


