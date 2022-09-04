<?php

abstract class Flink_ViewComponent {

    private $name;

    public function __construct(string $name) {
        $this->name = $name;
    }

    public function get_name() {
        return $this->name;
    }

    private function get_component_name() {
        $result = '';
        foreach (Flink_String::from(get_called_class())->explode('_') as $key => $segment) {
            if ($key <= 1) continue;
            $result .= '/' . $segment;
        }
        return Flink_String::from($result)->to_lower();
    }

    public function get_component_file() {
        $content_file = 'vendor/tilokowalski/flink/assets/html/vc' . $this->get_component_name() . '.phtml';
        $content_file = Flink_Application::prepare_url($content_file);
        if (!file_exists($content_file)) {
            $content_file = 'assets/html/vc' . $this->get_component_name() . '.phtml';
            $content_file = Flink_Application::prepare_url($content_file);
            Flink_Assert::file_exists($content_file, 'missing vc content file: ' . $content_file);
        }
        return $content_file;
    }

    public function render() {
        include $this->get_component_file();
    }

}