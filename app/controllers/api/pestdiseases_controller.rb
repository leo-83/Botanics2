class Api::PestdiseasesController < ApplicationController
    before_action :set_plant
    before_action :set_pestdisease, only: [:show, :update, :destroy]

    def index
        render json: @plant.pestdiseases
      end

      def show
        render json: @pestdisease
      end

      def create
        @pestdisease = @plant.pestdiseases.new(pestdisease_params)
        if @pestdisease.save
          render json: @pestdisease
        else
          render json: { errors: @pestdisease.errors }, status: :unprocessable_entity
        end
      end

      def update
        if @pestdisease.update(pestdisease_params)
          render json: @pestdisease
        else
          render json: { errors: @pestdisease.errors }, status: :unprocessable_entity
        end
      end

      def destroy
        @pestdisease.destroy
        render json: { message: 'pestdisease deleted' }
       
      end

      private 
    def pestdisease_params
      params.require(:pestdisease).permit(:user_id)
    end

    def set_plant
      @plant = Plant.find(params[:plant_id])
    end

    def set_pestdisease
      @pestdisease = @plant.enrollments.find(params[:id])
    end

end
