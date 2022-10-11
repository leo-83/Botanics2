class Api::PlantsController < ApplicationController
    before_action :set_plant
    before_action :set_plants, only: [:show, :update, :destroy]

    def index
        render json: Plants.all
      end

      def show
        @Plants = Plants.find(params[:id])
        render json: @plants
      end

      def create
        @plants = Plants.new(plants_params)
        if @plants.save
          render json: @plants
        else
          render json: { errors: @plants.errors }, status: :unprocessable_entity
        end
      end

      def update
        @plants = Plants.find(params[:id])
        if @plants.update(plants_params)
          render json: @plants
        else
          render json: { errors: @plants.errors }, status: :unprocessable_entity
        end
      end

      def destroy
        @plants = Plants.find(params[:id])
        @plants.destroy
        render json: { message: 'plants deleted' }
        or
        Plants.find(params[:id]).destroy
        render json: { message: 'plants deleted' }
      end

      private
  def plants_params
    params.require(:plants).permit(:name, :image, :desc)
  end

end

