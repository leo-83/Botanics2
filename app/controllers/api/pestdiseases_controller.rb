class Api::PestdiseasesController < ApplicationController
    before_action :set_plant
    before_action :set_pestdiseases, only: [:show, :update, :destroy]

    def index
        render json: Pestdisease.all
      end

      def show
        @Pestdisease = Pestdisease.find(params[:id])
        render json: @pestdisease
      end

      def create
        @pestdisease = Pestdisease.new(pestdisease_params)
        if @pestdisease.save
          render json: @pestdisease
        else
          render json: { errors: @pestdisease.errors }, status: :unprocessable_entity
        end
      end

      def update
        @pestdisease = Pestdisease.find(params[:id])
        if @pestdisease.update(pestdisease_params)
          render json: @pestdisease
        else
          render json: { errors: @pestdisease.errors }, status: :unprocessable_entity
        end
      end

      def destroy
        @pestdisease = Pestdisease.find(params[:id])
        @pestdisease.destroy
        render json: { message: 'pestdisease deleted' }
       
      end

      private
        def set_plant
          @plant = Plant.find(params[:plant_id])

        def pestdisease_params
          params.require(:pestdisease).permit(:name, :pdate, :problem :treatment)
      end

end
