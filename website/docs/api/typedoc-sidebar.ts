import { SidebarsConfig } from "@docusaurus/plugin-content-docs";
const typedocSidebar: SidebarsConfig = {
  items: [
    {
      type: "category",
      label: "Classes",
      items: [
        {
          type: "doc",
          id: "api/classes/AbstractHealthIndicator",
          label: "AbstractHealthIndicator"
        },
        {
          type: "doc",
          id: "api/classes/Actuator",
          label: "Actuator"
        },
        {
          type: "doc",
          id: "api/classes/HealthCheck",
          label: "HealthCheck"
        },
        {
          type: "doc",
          id: "api/classes/SimpleHealthIndicator",
          label: "SimpleHealthIndicator"
        }
      ]
    },
    {
      type: "category",
      label: "Interfaces",
      items: [
        {
          type: "doc",
          id: "api/interfaces/ActuatorInfo",
          label: "ActuatorInfo"
        },
        {
          type: "doc",
          id: "api/interfaces/HealthCheckResult",
          label: "HealthCheckResult"
        },
        {
          type: "doc",
          id: "api/interfaces/HealthIndicator",
          label: "HealthIndicator"
        },
        {
          type: "doc",
          id: "api/interfaces/HealthResult",
          label: "HealthResult"
        }
      ]
    },
    {
      type: "category",
      label: "Type Aliases",
      items: [
        {
          type: "doc",
          id: "api/type-aliases/HealthStatus",
          label: "HealthStatus"
        }
      ]
    },
    {
      type: "category",
      label: "Functions",
      items: [
        {
          type: "doc",
          id: "api/functions/getInfo",
          label: "getInfo"
        },
        {
          type: "doc",
          id: "api/functions/getRuntimeInfo",
          label: "getRuntimeInfo"
        }
      ]
    }
  ]
};
export default typedocSidebar;