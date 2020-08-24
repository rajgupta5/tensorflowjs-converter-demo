# tensorflowjs-converter-demo

Steps to convert PB model to tensorflow js
===========================================

URL to refer: 
- https://www.tensorflow.org/js/guide/conversion
- https://www.tensorflow.org/js/demos

1. Create a new conda environment
  - conda create -n tensorflowjs python==3.6.9

2. Activate the environment
  - conda activate tensorflowjs
  
3. Install the TensorflowJS and Jupter Notebook
  - pip install tensorflowjs
  - pip install jupyter

4. Launch Jupyter Notebook and run "checkTheOutputNodeParams.ipynb"

5. Stop Jupyter Notebook and run below command
  - tensorflowjs_converter --input_format=tf_frozen_model --output_node_names='detection_boxes,detection_scores,detection_classes,num_detections' AnprModel/saved_model.pb JsModelConvertedFromPB2/AnprModel
  
  
  
