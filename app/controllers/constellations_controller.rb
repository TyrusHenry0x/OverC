class ConstellationsController < ApplicationController
  # before_action :set_constellation, only: :show
  before_action :authorize_request, only: :create
  before_action :set_user_constellation, only: [:show, :update, :destroy]

  # GET /constellations
  def index
    @constellations = Constellation.all

    render json: @constellations
  end

  # GET /constellations/1
  def show
  render json: @constellation, include: :tasks
  end

  # POST /constellations
  def create
    @constellation = Constellation.new(constellation_params)
    @constellation.user = @current_user
    if @constellation.save
      render json: @constellation, status: :created
    else
      render json: @constellation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /constellations/1
  def update
    if @constellation.update(constellation_params)
      render json: @constellation
    else
      render json: @constellation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /constellations/1
  def destroy
    @constellation.destroy
  end

  def add_task
    @constellation = Constellation.find(constellation_params[:constellation_id])
    @task = Task.find(constellation_params[:task_id])

    @constellation.tasks << @task

    render json: @constellation.tasks
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_constellation
      @constellation = Constellation.find(params[:id])
    end

    def set_user_constellation
      @constellation = @current_user.constellations.find(params[:id])
    end
    # Only allow a list of trusted parameters through.
    def constellation_params
      params.require(:constellation).permit(:name, :constellation_id, :task_id)
    end
end
