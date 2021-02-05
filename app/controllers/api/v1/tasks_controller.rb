# frozen_string_literal: true

class Api::V1::TasksController < ApplicationController
  def index
    render json: collection.with_attached_avatar, each_serializer: TaskSerializer
  end

  def create
    new_task = Task.new
    new_task.description = task_params[:description]
    new_task.save!

    # new_task.avatar.attach(io: File.open(task_params[:avatar]), filename: task_params[:avatar])

    render json: new_task
  end

  def update
    task.complete!

    render json: task
  end

  private

  def task
    @task ||= Task.find_by_id(task_params[:id])
  end

  def task_params
    params
  end

  def collection
    @collection ||= Task.all.order('completed_at IS NULL, completed_at DESC, created_at DESC')
  end
end
