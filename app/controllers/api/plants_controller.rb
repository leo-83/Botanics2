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
        @plant = Plant.new(plant_params)
        if @plant.save
          render json: @plant
        else
          render json: { errors: @plant.errors }, status: :unprocessable_entity
        end
      end

      def update
        if @plant.update(plant_params)
          render json: @plant
        else
          render json: { errors: @plant.errors }, status: :unprocessable_entity
        end
      end

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


