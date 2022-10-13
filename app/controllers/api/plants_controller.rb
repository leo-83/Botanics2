class Api::PlantsController < ApplicationController

    before_action :authenticate_user!
    before_action :set_plant, only: [:show, :update, :destroy]

    def index
        render json: Plant.all
      end

      def show
        @plant = Plant.find(params[:id])
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
        @plant = Plant.find(params[:id])
        if @plant.update(plant_params)
          render json: @plant
        else
          render json: { errors: @plant.errors }, status: :unprocessable_entity
        end
      end

      def destroy
        @plant = Plant.find(params[:id])
        @plant.destroy
        render json: { message: 'plants deleted' }
      end

      private
      def set_plant
        @plant = Plant.find(params[:id])
      end
      def plant_params
        params.require(:plant).permit(:name, :img, :desc)
      end
end


